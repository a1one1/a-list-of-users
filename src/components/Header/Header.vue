<template>
  <header>
    <nav class="navigate">
      <div class="btns">
        <DxButton text="Users" />
        <DxButton text="Countries" />
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
  display: flex;
  justify-content: center;
}
.btns {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
</style>
