import { FormlyFieldConfig } from "@ngx-formly/core";

export const execEval = (code: string) => eval('(' + code + ')')

export const execFunc = (func: string | Function) => typeof(func) == 'string' ? execEval(func) : func

export const execFunction = (name: string) => (new Function( 'return ' + name))();

  // export declare type FormlyAttributeEvent = (field: FormlyFieldConfig, event?: any) => void;

export const runFunction = (name: string, field?: FormlyFieldConfig, $event?: Event) => {
  try{
    if (name) {
      const func = execFunction(name)
      func(field, $event)
    }
  } catch (err) {
    console.log(name + ': error', err)
  }
}