<template>
  <div class="container mt-5" v-if="html">
    <div class="markdown-body" v-html="html"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js';

const route = useRoute()
const html = ref('')

marked.setOptions({
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});


onMounted(async () => {
  const id = route.params.id      // 예: 'project-setup'
  const category = route.params.type      // or route.params.type
  console.log(`/posts/${category}/${id}.md`);
  const res = await fetch(`/posts/${category}/${id}.md`)
  const md = await res.text()
  // console.log(md);
  html.value = marked(md)
  await nextTick();  // DOM 렌더 완료 대기
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
})
</script>

<!-- <style>
.markdown-body pre code {
  display: block;
  padding: 1em;
  background-color: #2d2d2d;
  border-radius: 5px;
  overflow-x: auto;
}
</style> -->