import { reactive, computed, ComputedRef, ref, Ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { inputType, formDataType } from './types';
import { isPhone, ruleType, phoneOrMail } from '@/util/validate';
import { NEED_PHONE, NEED_EMAIL } from '@/util/constants';
import { useStore } from 'vuex';


export type oneRuleType = ComputedRef<
  (ruleType | ComputedRef<string> | string)[]
>;

export enum NumberType {
  //号码类型
  phone = 1, //手机
  email = 2, //邮箱
}

export const useData = () => {
  const router = useRouter();

  const route = useRoute();

  const store = useStore();

  //获取最外层form组件的实例
  const form = ref<null | { validate: () => boolean }>(null);

  //form组件对应状态
  const form_data = reactive<formDataType>({
    number_number: '', //用户名
    password: '', //密码
  });

  // 当前账号是'phone'还是'email' 对应传给后端的值
  const number_type = computed(
    (): NumberType => {
      return isPhone(form_data.number_number)
        ? NumberType.phone
        : NumberType.email;
    }
  );

  const rules = getRules({ form_data }); //获取表单校验规则

  /**
   * 点击提交按钮
   */
  const onSubmmit = () => {
    if (!form.value || !form.value.validate()) {
      return false;
    }
    //前端校验通过
   
  };

  /**
   * 点击忘记密码
   */
  const onForgetPwd = () => {
    router.push({ path: '/forgetpwd' });
  };

  /**
   * 跳转到注册页面
   */
  const onRegister = () => {
    router.push({ path: '/register' });
  };

  return {
    form,
    form_data,
    rules,
    onSubmmit,
    onForgetPwd,
    onRegister,
  };
};

/**
 * 获取校验规则
 */
const getRules = ({ form_data }: { form_data: formDataType }) => {
  //手机号码或者有效地址的校验规则
  const number_rule: oneRuleType = computed(() => {
    return [
      {
        type: 'custome',
        callback() {
          if (!phoneOrMail(form_data.number_number)) {
            return {
              flag: false,
              msg: '请输入正确的手机号码或邮箱地址',
            };
          }
          return {
            flag: true,
          };
        },
      },
    ];
  });

  //密码校验规则
  const passowrd_rule: oneRuleType = computed(() => {
    return [
      {
        type: 'required',
        msg: '请输入密码',
      },
      {
        type: 'minLength',
        params: 6,
      },
    ];
  });

  return {
    number_number: number_rule,
    password: passowrd_rule,
  };
};
