export type rightType = 'timer' | 'close'; // 定时器模式或者关闭图标

export type timerType = 'static' | 'dynamic' | null; // 静态文案还是正在计时

export interface timerDataType {
  content: string;
  status: timerType;
}
