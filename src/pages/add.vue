<template>
  <div>
    <el-dialog title="新增学生" :visible.sync="isVisible">
      <el-form :model="form">
        <el-form-item label="学生id" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="_cancel">取 消</el-button>
        <el-button type="primary" @click="_confirm()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      form: {
        id: "",
        name: "",
        age: "",
      },
      formLabelWidth: "120px",
      resolver: null,
    };
  },
  methods: {
    open(value) {
      return new Promise((resolve) => {
        this.resolver = resolve;
        if (value) {
          this.form = value;
        } else {
          this.form = {
            id: "",
            name: "",
            age: "",
          };
        }
        this._visible(true);
      });
    },
    _visible(is) {
      this.isVisible = is;
    },
    _cancel() {
      this._visible(false);
      this.resolver(false);
    },
    async _confirm() {
      this._visible(false);
      this.resolver(this.form);
    },
  },
};
</script>

<style>
</style>