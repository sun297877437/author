<template>
  <div class="page">
    <el-row style="margin-top:20px;" type="flex" justify="center" shadow="hover">
      <el-col
        :span="22"
        style="padding:24px;border: 1px solid #ebebeb;border-radius: 3px;background:#ffffff;;"
      >
        <el-table :data="tableData4" class="table">
          <el-table-column prop="date" label="发布时间"></el-table-column>
          <el-table-column prop="name" label="标题" width="500"></el-table-column>
          <el-table-column prop="status" label="状态" width="200"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" style="padding-top:24px;">
        <div class="pagination">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { apiLogin } from "@/config/api.js";
import { mapState } from "vuex";
const editorOption = {
  modules: {}
};
export default {
  data() {
    return {
      pageTotal: 0,
      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10
      },
      tableData4: [
        {
          date: "2016-05-03",
          name: "王小虎",
          status: "已通过"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          status: "已通过"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          status: "已通过"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          status: "已通过"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          status: "已通过"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          status: "已通过"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          status: "已通过"
        }
      ]
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"]),
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    // 分页导航
    handlePageChange(val) {
      this.$set(this.query, "pageIndex", val);
    }
  },
  methods: {
    handlePageChange(e) {
      console.log(e);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>
<style scope>
.table {
  width: 6000px;
}
.el-table thead {
  background-color: #f5f7fa !important;
}
.pagination {
  text-align: right;
}
</style>