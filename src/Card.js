// <span :class="['edit']" @click="handleClick(item.label, 'edit')" v-show="key!=='done'">编辑</span>
const temp = `
  <ul v-if="list.length !== 0">
    <li v-for="(item, index) in list" :key="item.label">
      {{item.value}}
      <div :class="['operation']">
        <span :class="['start']" @click="handleClick(item.label, 'to')" v-show="key!=='done' && key!== 'to'">开始</span>
        <span :class="['delete']" @click="handleClick(item.label, 'delete')" v-show="key!=='done'">删除</span>
      </div>
    </li>
  </ul>
  `;
Vue.component("card", {
  props: {
    cardAttr: {
      require: true,
      type: [String, Number],
    },
    cardData: {
      require: true,
      type: Array,
    },
  },
  data: function () {
    return {
      key: this.cardAttr,
      list: this.cardData,
    };
  },
  computed: {},
  watch: {
    cardData: function (val) {
      this.list = val;
    },
    cardAttr: function (val) {
      this.key = val;
    },
  },
  created: function () {},
  mounted: function () {},
  methods: {
    handleClick: function (index, type) {
      this.$emit("operating", this.key, index, type);
    },
  },
  template: temp,
});
