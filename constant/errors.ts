export enum ErrorType {
  InValidToken = 'key错误，调用失败',
  NoGeminiKey = 'Gemini key丢失，不是你的问题',
  ServerError = '出了点问题，等等吧',
  MissingParam = '没填参数，不准使用',
  NoUploadURL = 'URL上传失败，自己找找原因 ',
}
