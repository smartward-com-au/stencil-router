import ActiveRouter from './active-router';
export default function injectHistory(Component) {
  ActiveRouter.injectProps(Component, ['history', 'location']);
}
