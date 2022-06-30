import { WatermarkPipe } from './watermark.pipe';

describe('WatermarkPipe', () => {
  it('create an instance', () => {
    const pipe = new WatermarkPipe();
    expect(pipe).toBeTruthy();
  });
});
