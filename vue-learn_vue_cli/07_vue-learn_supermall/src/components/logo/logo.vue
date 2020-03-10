<template>
  <div>
    <el-card>
      <!--    标题和添加按钮-->
      <div>
        <span>底部logo配置</span>
        <el-button size="small" @click="NewLogo()">添加</el-button>
      </div>

      <!--    配置底部logo的表格-->
      <div class="mod-sys-params">
        <el-table
                :v-loading="dataListLoading"
                :data="dataList"
                style="width: 100%">
          <el-table-column
                  type="index"
                  label="序号"
                  width="50">
          </el-table-column>
          <el-table-column
                  prop="startTime"
                  label="比赛开始时间"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="clogo"
                  label="赛事logo(底部logo样式)"
                  width="180">
            <!--插入图片链接的代码-->
            <template slot-scope="scope">
              <img  :src="scope.row.clogo" alt="" style="width: 50px;height: 50px">
            </template>
          </el-table-column>
          <el-table-column
                  prop="cname"
                  label="赛事信息">
          </el-table-column>
          <el-table-column
                  prop=""
                  label="比赛对阵">
            <template slot-scope="scope">
              {{scope.row.homeName}} VS {{scope.row.awayName}}
            </template>
          </el-table-column>
          <el-table-column
                  prop="info"
                  label="配置文案">
          </el-table-column>
          <el-table-column
                  prop=""
                  label="显示时间">
            <template slot-scope="scope">
              {{scope.row.startTime}}<br>
              至<br>
              {{scope.row.endTime}}
            </template>
          </el-table-column>
          <el-table-column
                  prop=""
                  label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="EditLogo()">编辑</el-button>
              <el-button size="mini" @click="DeleteInfo(scope.$index , scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <LogoAdd v-if="addDialog" ref="addLogo" @refreshDataList="getDataList"></LogoAdd>
<!--        没有具体界面没写-->
<!--        <LogoEdit v-if="editDialog" ref="editLogo" @refreshDataList="getDataList"></LogoEdit>-->
      </div>
    </el-card>
  </div>
</template>
<script>
  import LogoAdd from'./logo-add'
  import LogoEdit from './logo-edit'

  export default {
    components: {
      LogoAdd,
      LogoEdit
    },
    data() {
      return {
        page: 1,
        size: 20,
        //赛事logo配置对象数组
        dataList: [
            {
              id: '123asfhgtru',
              startTime: '123123123',
              clogo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583818574856&di=90fb538b674ae4e39c6d2b0da9f88e02&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F08%2F20%2F2357b8781a8b798.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
              cname: 'xxx',
              homeName: 'aaa',
              awayName: 'bbb',
              info: 'asdqwerty',
              endTime: 'asdasdads'
            }
            ],

        //加载
        dataListLoading: false,

        //请求数据对象
        dataForm: {

        },

        addDialog: true,

        editDialog: false

      }
    },
    created () {
      //展示底部logo配置列表
      this.show();
    },
    methods: {

      //展示添加logo对话框
      NewLogo() {
        this.addDialog = true;
        console.log(this.addDialog);
        this.$nextTick(() => {
          this.$refs.addLogo.init()
        })
      },


      //展示编辑logo对话框
      EditLogo() {
        this.editDialog = true;
        console.log(this.editDialog)
        this.$nextTick(() => {
          this.$refs.editLogo.init()
        })
      },

      //删除此条logo信息
      DeleteInfo(index, item) {
        //要删除的id
        let id = item.id;
        console.log(id);
        //http接口
      },

      show () {
        this.getDataList()
      },

      //初始化底部logo列表
      getDataList() {
        //http请求
        let params= {
          ...this.dataForm,
          page: this.page,
          size: this.size
        }

        //显示加载
        this.dataListLoading = true

        //get请求


      }
    }
  }
</script>
