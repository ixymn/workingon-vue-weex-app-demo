export default {
  methods: {
    img(path) {
      if(WXEnvironment.platform=='Web'){
        return '/web/'+path;
      }else if(WXEnvironment.platform=='iOS'){
        return 'file://'+path;

      }
    } //end of img
  }
}
