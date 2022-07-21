import { Observable } from "rxjs";

export const watermark = (value: string): Observable<string> => {
  return new Observable ((observed) => {
    const zIndex = 9;
    const gapX = 212;
    const gapY = 222;
    const width  = 120;
    const height = 64;
    const rotate = -22; // 默认旋转 -22 度
    const image = null;
    const content = value;
    const offsetLeft = null;
    const offsetTop = null;
    const fontStyle = 'normal';
    const fontWeight = 'normal';
    const fontColor = 'rgba(0,0,0,.15)';
    const fontSize = 16;
    const fontFamily = 'sans-serif';
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ratio = 1;
    
    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    const canvasOffsetLeft = offsetLeft || gapX / 2;
    const canvasOffsetTop = offsetTop || gapY / 2;
    
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    
    if (ctx) {
      // 旋转字符 rotate
      ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      const markWidth = width * ratio;
      const markHeight = height * ratio;
    
      if (image) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, markWidth, markHeight);
          observed.next('url(' + canvas.toDataURL() + ')')
        };
      } else if (content) {
        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        canvas.toDataURL();
        observed.next('url(' + canvas.toDataURL() + ')')
      }
    } else {
      // eslint-disable-next-line no-console
      observed.error('当前环境不支持Canvas')
    }
  });
}