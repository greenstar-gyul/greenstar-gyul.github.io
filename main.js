const app = Vue.createApp({
  data() {
    return {
      title: "Vue로 만든 나만의 블로그",
      posts: [
        { id: 1, title: "첫 번째 글", content: "Vue 블로그를 시작했어요!" },
        { id: 2, title: "두 번째 글", content: "GitHub Pages에 올릴 수 있어요." }
      ]
    };
  }
});

app.mount('#app');
