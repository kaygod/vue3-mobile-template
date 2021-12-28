import {
  Button,
  Icon,
  Dialog,
  Tab,
  Tabs,
  Toast,
  Image as VanImage,
  Popup,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Card,
  List,
  Divider,
  Stepper,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Overlay,
  Step,
  Steps,
  Cell,
  CellGroup,
  Field,
  Loading,
  ActionSheet,
  Picker,
  Sticky
} from 'vant';

export const importVant = (app: any) => {
  app.use(Button);
  app.use(Icon);
  app.use(Dialog);
  app.use(Tab);
  app.use(Tabs);
  app.use(Toast);
  app.use(VanImage);
  app.use(Popup);
  app.use(Tabbar);
  app.use(TabbarItem);
  app.use(Swipe);
  app.use(SwipeItem);
  app.use(Card);
  app.use(List);
  app.use(Divider);
  app.use(Stepper);
  app.use(Checkbox);
  app.use(CheckboxGroup);
  app.use(RadioGroup);
  app.use(Radio);
  app.use(Overlay);
  app.use(Step);
  app.use(Steps);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Field);
  app.use(Loading);
  app.use(ActionSheet);
  app.use(Picker);
  app.use(Sticky);   
};
