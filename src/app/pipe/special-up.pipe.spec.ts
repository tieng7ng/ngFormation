import { SpecialUpPipe } from './special-up.pipe';

fdescribe('SpecialUpPipe', () => {


  it('create an instance', () => {
    const pipe = new SpecialUpPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work with empty string', () => {
    const pipe = new SpecialUpPipe();
    expect(pipe.transform('')).toEqual('');
  });

  it('should work with "hello word" string', () => {
    const pipe = new SpecialUpPipe();
    expect(pipe.transform('hello word')).toEqual('Hello worD');
  });

});
