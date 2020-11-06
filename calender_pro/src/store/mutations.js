export default {
  setHeaderTitle (state, routerName) {
    switch (routerName) {
      case 'day':
        state.setHeaderTitle = '当天信息';
        break;
      case 'month':
        state.setHeaderTitle = '近期假期';
      case 'year':
        state.setHeaderTitle = '当年假期';
        break;
      default:
        state.setHeaderTitle = '当天信息';
        break;
    }
  }
}
