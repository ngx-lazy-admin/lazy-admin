import { FormlyFieldConfig, FormlyFormOptions, FieldType } from '@ngx-formly/core';
import { isObservable } from 'rxjs';
import { TemplateRef, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { AbstractControl,  AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { isBlankString, isFunction, isNullOrUndefined, isObject } from './type';

export interface ExpressionPropertyCache {
  expression: (model: any, formState: any, field: FormlyFieldConfigCache) => boolean;
  expressionValue?: any;
}

export interface FormlyFormOptionsCache extends FormlyFormOptions {
  _checkField?: (field: FormlyFieldConfigCache, ignoreCache?: boolean) => void;
  _markForCheck?: (field: FormlyFieldConfigCache) => void;
  _buildForm?: () => void;
  _buildField?: (field: FormlyFieldConfigCache) => FormlyFieldConfigCache;
  _resolver?: ComponentFactoryResolver;
  _injector?: Injector;
  _hiddenFieldsForCheck?: FormlyFieldConfigCache[];
  _initialModel?: any;
}

export interface FormlyFieldConfigCache extends FormlyFieldConfig {
  parent?: FormlyFieldConfigCache;
  options?: FormlyFormOptionsCache;
  _expressionProperties?: { [property: string]: ExpressionPropertyCache };
  resetOnHide?: boolean;
  _hide?: boolean;
  _validators?: ValidatorFn[];
  _asyncValidators?: AsyncValidatorFn[];
  _componentRefs?: ComponentRef<FieldType>[];
  _keyPath?: {
    key: FormlyFieldConfig['key'];
    path: string[];
  };
}

export function getFieldId(formId: string, field: FormlyFieldConfig, index: string|number) {
  if (field.id) return field.id;
  let type = field.type;
  if (!type && field.template) type = 'template';
  return [formId, type, field.key, index].join('_');
}

export function getKeyPath(field: FormlyFieldConfigCache): string[] {
  if (!field.key) {
    return [];
  }

  /* We store the keyPath in the field for performance reasons. This function will be called frequently. */
  if (!field._keyPath || field._keyPath.key !== field.key) {
    let path: string[] = [];
    if (typeof field.key === 'string') {
      const key = field.key.indexOf('[') === -1
        ? field.key
        : field.key.replace(/\[(\w+)\]/g, '.$1');
      path = key.indexOf('.') !== -1 ? key.split('.') : [key];
    } else if (Array.isArray(field.key)) {
      path = field.key.slice(0);
    } else {
      path = [`${field.key}`];
    }

    field._keyPath = { key: field.key, path };
  }

  return field._keyPath.path.slice(0);
}

export const FORMLY_VALIDATORS = ['required', 'pattern', 'minLength', 'maxLength', 'min', 'max'];

export function assignFieldValue(field: FormlyFieldConfigCache, value: any) {
  let paths = getKeyPath(field);
  if (paths.length === 0) {
    return;
  }

  let root = field;
  while (root.parent) {
    root = root.parent;
    paths = [...getKeyPath(root), ...paths];
  }

  if (value === undefined && field.resetOnHide) {
    const k = paths.pop();
    const m = paths.reduce((model, path) => model[path] || {}, root.model);
    k && delete m[k];
    return;
  }

  assignModelValue(root.model, paths, value);
}

export function assignModelValue(model: any, paths: string[], value: any) {
  for (let i = 0; i < (paths.length - 1); i++) {
    const path = paths[i];
    if (!model[path] || !isObject(model[path])) {
      model[path] = /^\d+$/.test(paths[i + 1]) ? [] : {};
    }

    model = model[path];
  }

  model[paths[paths.length - 1]] = clone(value);
}

// export function getFieldInitialValue(field: FormlyFieldConfig) {
//   let value = field.options['_initialModel'];
//   let paths = getKeyPath(field);
//   while (field.parent) {
//     field = field.parent;
//     paths = [...getKeyPath(field), ...paths];
//   }

//   for (const path of paths) {
//     if (!value) {
//       return undefined;
//     }
//     value = value[path];
//   }

//   return value;
// }

export function getFieldValue(field: FormlyFieldConfig): any {
  let model = field?.parent?.model;
  for (const path of getKeyPath(field)) {
    if (!model) {
      return model;
    }
    model = model[path];
  }

  return model;
}

export function reverseDeepMerge(dest: any, ...args: any[]) {
  args.forEach(src => {
    for (let srcArg in src) {
      if (isNullOrUndefined(dest[srcArg]) || isBlankString(dest[srcArg])) {
        dest[srcArg] = clone(src[srcArg]);
      } else if (objAndSameType(dest[srcArg], src[srcArg])) {
        reverseDeepMerge(dest[srcArg], src[srcArg]);
      }
    }
  });
  return dest;
}

export function objAndSameType(obj1: any, obj2: any) {
  return isObject(obj1) && isObject(obj2)
    && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)
    && !(Array.isArray(obj1) || Array.isArray(obj2));
}

export function clone(value: any): any {
  if (
    !isObject(value)
    || isObservable(value)
    || (value instanceof TemplateRef)
    || /* instanceof SafeHtmlImpl */ value.changingThisBreaksApplicationSecurity
    || ['RegExp', 'FileList', 'File', 'Blob'].indexOf(value.constructor.name) !== -1
  ) {
    return value;
  }

  if (value instanceof Set) {
    return new Set(value);
  }

  if (value instanceof Map) {
    return new Map(value);
  }

  // https://github.com/moment/moment/blob/master/moment.js#L252
  if (value._isAMomentObject && isFunction(value.clone)) {
    return value.clone();
  }

  if (value instanceof AbstractControl) {
    return null;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.slice(0).map(v => clone(v));
  }

  // best way to clone a js object maybe
  // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
  const proto = Object.getPrototypeOf(value);
  let c = Object.create(proto);
  c = Object.setPrototypeOf(c, proto);
  // need to make a deep copy so we dont use Object.assign
  // also Object.assign wont copy property descriptor exactly
  return Object.keys(value).reduce((newVal, prop) => {
    const propDesc = Object.getOwnPropertyDescriptor(value, prop);
    if (propDesc && propDesc?.get) {
      Object.defineProperty(newVal, prop, propDesc);
    } else {
      newVal[prop] = clone(value[prop]);
    }

    return newVal;
  }, c);
}

export function defineHiddenProp(field: any, prop: string, defaultValue: any) {
  Object.defineProperty(field, prop, { enumerable: false, writable: true, configurable: true });
  field[prop] = defaultValue;
}

export function wrapProperty<T = any>(
  o: any,
  prop: string,
  setFn: (change: {currentValue: T, previousValue?: T, firstChange: boolean}) => void,
) {
  if (!o._observers) {
    defineHiddenProp(o, '_observers', {});
  }

  if (!o._observers[prop]) {
    o._observers[prop] = [];
  }

  let fns: typeof setFn[] = o._observers[prop];
  if (fns.indexOf(setFn) === -1) {
    fns.push(setFn);
    setFn({ currentValue: o[prop], firstChange: true });
    if (fns.length === 1) {
      defineHiddenProp(o, `___$${prop}`, o[prop]);
      Object.defineProperty(o, prop, {
        configurable: true,
        get: () => o[`___$${prop}`],
        set: currentValue => {
          if (currentValue !== o[`___$${prop}`]) {
            const previousValue = o[`___$${prop}`];
            o[`___$${prop}`] = currentValue;
            fns.forEach(changeFn => changeFn({ previousValue, currentValue, firstChange: false }));
          }
        },
      });
    }
  }

  return () => fns.splice(fns.indexOf(setFn), 1);
}

export function reduceFormUpdateValidityCalls(form: any, action: Function) {
  const updateValidity = form._updateTreeValidity.bind(form);

  let updateValidityArgs = { called: false, emitEvent: false };
  form._updateTreeValidity = ({ emitEvent } = { emitEvent: true }) => updateValidityArgs = { called: true, emitEvent: emitEvent || updateValidityArgs.emitEvent };
  action();

  updateValidityArgs.called && updateValidity({ emitEvent: updateValidityArgs.emitEvent });
  form._updateTreeValidity = updateValidity;
}

export function fieldChange (field: FormlyFieldConfigCache, model: any) {
  let i = field.fieldGroup?.length;
  field.model.splice(0, i, ...clone(model));
  (field.options as any)._buildForm();
}

// 判断类型


// 随机字符串
export const randomString = (e: number) => {    
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
  a = t.length,
  n = "";
  for (let i = 0; i < e; i++) {
    n += t.charAt(Math.floor(Math.random() * a));
  }
  return n
}

//遍历删除对象中的空值属性
export const delNullProperty = (obj: any): any =>{
  // 遍历对象中的属性
  for( let i in obj ){
    // 首先除去常规空数据，用delete关键字
    // console.log(i)
    if (i === '_keyPath' ||
      obj[i] === undefined ||
      obj[i] === null ||
      obj[i] === "" ||
      JSON.stringify(obj[i]) === '{}' ||
      JSON.stringify(obj[i]) === '[]'){
      delete obj[i]
    } else if(obj[i].constructor === Object) {
      // 如果发现该属性的值还是一个对象，再判空后进行迭代调用
      if(Object.keys(obj[i]).length === 0) {
        delete obj[i] // 判断对象上是否存在属性，如果为空对象则删除
      }
      delNullProperty(obj[i])
    } else if(obj[i].constructor === Array){ //对象值如果是数组，判断是否为空数组后进入数据遍历判空逻辑
      if( obj[i].length === 0 ){ //如果数组为空则删除
        delete obj[i]
      }else{
        for( let index = 0 ; index < obj[i].length ; index++){//遍历数组
          if(obj[i][index] === undefined || obj[i][index] === null || obj[i][index] === "" || JSON.stringify(obj[i][index]) === "{}" ){
            obj[i].splice(index,1)//如果数组值为以上空值则修改数组长度，移除空值下标后续值依次提前
            index--//由于数组当前下标内容已经被替换成下一个值，所以计数器需要自减以抵消之后的自增
          }
          if(obj[i].constructor === Object){//如果发现数组值中有对象，则再次进入迭代
            delNullProperty(obj[i])
          }
        }
      }
    }
  }
}