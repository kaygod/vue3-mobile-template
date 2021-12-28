import { reactive, ref, watch, onMounted, inject } from 'vue';
import { timerDataType } from './types';
import { validateResult, getValidate, ruleType } from '@/util/validate';

/**
 * 获取定时器相关数据
 */
export const useTimerData = (props: any) => {
  const timerData = reactive<timerDataType>({
    content: '获取验证码',
    status: 'static',
  }); //显示定时器的文案
  /**
   * 获取验证码
   */
  const getCaptcha = () => {
    if (timerData.status === 'static') {
      props.onCaptcha &&
        props.onCaptcha(() => {
          //静态
          timerData.status = 'dynamic'; //开始倒计时
          let num = 61;
          const circulte = (n: number) => {
            n--;
            if (n < 0) {
              //时间到了
              timerData.status = 'static';
              timerData.content = '验证码';
              return false;
            }
            const timer = setTimeout(() => {
              clearTimeout(timer);
              timerData.content = `${n}秒后重发`;
              circulte(n);
            }, 1000);
          };
          circulte(num);
        });
    }
  };

  return {
    timerData,
    getCaptcha,
  };
};

/**
 * 获取close图标相关数据
 */
export const useCloseIcon = (updateValue: (v: string) => void, props: any) => {
  const closeFlag = ref(false);
  const clearValue = () => {
    updateValue('');
  };
  watch(
    () => props.value,
    (new_value) => {
      if (new_value.trim() !== '') {
        closeFlag.value = true;
      } else {
        closeFlag.value = false;
      }
    }
  );
  return {
    closeFlag,
    clearValue,
  };
};

/**
 * 执行校验逻辑
 */
export const useValidate = (props: any, rule: []) => {
  const validateFn = getValidate(rule);

  /**
   * 执行校验
   *
   */
  const execValidate = (): validateResult => {
    let result: validateResult | null = null;
    if (validateFn) {
      result = validateFn(props.value);
    }
    if (result == null) {
      //这种情况不做校验直接通过
      return {
        flag: true,
      };
    } else {
      return result;
    }
  };

  execValidate.propName = props.propName;

  onMounted(() => {
    const Listener = inject<Function>('collectValidate');
    if (Listener) {
      Listener(execValidate);
    }
  });
};
