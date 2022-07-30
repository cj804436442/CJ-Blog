<template>
  <div class="student">
    <div class="student-query">
      <el-form ref="form" class="" :model="form" label-width="60px">
        <el-form-item label="学号:">
          <el-input
            class="student-query_input"
            size="small"
            v-model="form.id"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" @click="queryById()">查询</el-button>
          <el-button size="small" type="primary" @click="addStudent()"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="student-table" id="demo">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="80" align="center"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="80" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="80" align="center"> </el-table-column>
        <el-table-column prop="option" label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="editStudent(scope.row)"
              size="small"
            >
              修改
            </el-button>
            <el-button
              @click.native.prevent="deleteById(scope.row.id)"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Add ref="add"></Add>
  </div>
</template>

<script>
import Add from "./add.vue";
export default {
  components: {
    Add,
  },
  data() {
    return {
      tableData: [
        {
          age: "18",
          id: "1",
          name: "张三",
        },
        {
          age: "20",
          id: "2",
          name: "李四",
        },
        {
          age: "23",
          id: "3",
          name: "王五",
        },
      ],
      form: {
        id: "",
      },
    };
  },
  mounted() {
    // this.queryAll();
  },
  methods: {
    async queryById() {
      this.$loading(true);
      let id = this.form.id;
      const { status, data } = await this.$service.queryById({
        id: id,
      });
      if (!status) return false;
      this.tableData = data;
      this.$loading(false);
    },
    async queryAll() {
      const data = await this.$service.queryAll();
      this.tableData = data.data;
    },
    async deleteById(id) {
      const flag = await this.$confirm("是否确定删除？");
      if (!flag) return false;
      const { status } = await this.$service.deleteById({
        id: id,
      });
      if (!status) return false;
      this.$message.success("删除成功！");
      this.queryAll();
    },
    async addStudent() {
      this.$nextTick(async () => {
        const flag = await this.$refs.add.open();
        if (!flag) return;
        this.$loading(true);
        const { status } = await this.$service.addStudent(flag);
        this.$loading(false);
        if (status) this.$message.success("添加成功！");
        this.queryAll();
      });
    },
    async editStudent(value) {
      this.$nextTick(async () => {
        let data = JSON.parse(JSON.stringify(value));
        const flag = await this.$refs.add.open(data);
        if (!flag) return;
        this.$loading(true);
        const { status } = await this.$service.editStudent(flag);
        this.$loading(false);
        if (status) this.$message.success("修改成功！");
        this.queryAll();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  width: 1200px;
  margin: 0 auto;
  &-query {
    &_input {
      width: 200px;
    }
    /deep/ .el-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &-table {
    margin-top: 36px;
  }
}
.student-table {
  width: 420px;
}
</style>>
