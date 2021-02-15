<template>
  <div class="container">
    <div class="form-group">
      <FormDate class="borderB" :dateRange="{startDate, endDate}" @select="selectDate"></FormDate>
      <FormSelect class="borderB" @select="selectRoomAdult"></FormSelect>
      <input class="submit1 radius4 colorR1Bg" type="button" value="查找酒店" @click="submitFun()">
    </div>
    <Tabbar :active="1"></Tabbar>
    <Login ref="Login"></Login>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Login from '@/components/Login'
import FormDate from './FormDate'
import FormSelect from './FormSelect'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Tabbar,
    Login,
    FormDate,
    FormSelect
  },
  data() {
    return {
      room_num: 1,
      adults: 1,
    }
  },
  computed: {
    ...mapGetters([
      'startDate',
      'endDate'
    ])
  },
  methods: {
    selectDate(v) {
      const {startDate, endDate} = v;
      this.setDateRange({
        startDate: startDate,
        endDate: endDate
      })
    },
    selectRoomAdult(v) {
      const {room_num, adults} = v;
      this.room_num = room_num;
      this.adults = adults
    },
    submitFun() {
      this.$refs.Login.showLogin()
    },
    ...mapActions([
      'setDateRange'
    ])
  }
}
</script>

<style scoped>
.form-group{
  padding: 0 30px 40px;
}
.submit1{
  margin-top: 30px;
}
</style>