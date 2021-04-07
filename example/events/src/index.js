Vue.component("test-slot", {
  data: function () {
    return {
      title: "slot",
    };
  },
  template: `
    <div>
      <slot name="header":title="title" ></slot>
      <slot ></slot>
      <slot name="body"></slot>
    </div>
  `,
});
