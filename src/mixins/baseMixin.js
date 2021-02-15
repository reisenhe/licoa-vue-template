export const baseMixin = {
    data() {
        return {
        }
    },
    methods: {
        // 路由跳转传参
        navigateTo(name, query) {
            this.$router.push({name, query})
        }
    },
    filters: {
        JSONPLang(val) {
            return JSON.parse(val)['zh_cn']
        }
    }
}