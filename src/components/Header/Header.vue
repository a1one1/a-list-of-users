<template>
  <header>
    <nav class="navigate">
      <div class="list__users">
        <div>Пользователи</div>
        <DxButton text="Users" />
      </div>
    </nav>
  </header>
</template>

<script>
import DxButton from "devextreme-vue/button";
export default {
  components: {
    DxButton,
  },
};
</script>

<style lang="scss" scoped>
.navigate {
  padding: 30px;
}
.list__users {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
}
</style>
