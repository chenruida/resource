<template>
  <div>
    <h1 style="text-align: center">东明博物馆</h1>
    <el-row
      v-for="n in 3"
      :key="n"
      type="flex"
      justify="center"
      align="middle"
      class="img-row"
    >
      <el-col
        :span="6"
        v-for="(resource, index) in resourceList.slice(3 * (n - 1), 3 * n)"
        :key="index"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }" align="middle" shadow="hover">
          <div @click="toShow(resource.viewUrl)" class="click-div">
            <el-image
              style="width: 200px; height: 200px; padding: 5px"
              :src="resource.imgUrl"
              fit="fill"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i></div
            ></el-image>
            <div style="padding: 8px">
              <span style=" text-align=center"
                >{{ resource.collectionName }} -{{ resource.name }}</span
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        layout="total, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      resourceList: [],
      currentPage: 1,
      pageSize: 9,
      total: 0,
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getTableData()
    },
    getTableData () {
      this.$axios({
        method: 'get',
        url: 'http://192.168.70.153:3000/list',
        params: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize
        }
      }).then(res => {
        this.total = res.data[1]
        this.resourceList = res.data[0]
      })
    },
    toShow (path) {
      window.open(path, '_blank')
    }
  },
  created () {
    this.getTableData()
  }
}
</script>

<style scoped>
.img-row {
  margin: 10px;
}
.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-pagination {
  text-align: center;
}
.click-div {
  cursor: pointer;
}
</style>