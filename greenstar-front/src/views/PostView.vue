<template>
  <div class="container mt-5" v-if="html">
    <div v-html="html"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const html = ref('')

onMounted(async () => {
  const id = route.params.id      // 예: 'project-setup'
  const category = route.params.type      // or route.params.type
  console.log(`/posts/${category}/${id}.md`);
  const res = await fetch(`/posts/${category}/${id}.md`)
  const md = await res.text()
  console.log(md);
  html.value = marked(md)
})
</script>