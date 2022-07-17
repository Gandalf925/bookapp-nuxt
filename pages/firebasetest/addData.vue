<template>
  <div>
    <v-btn @click="addData">追加</v-btn>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'
export default {
  data() {
    return {
      id: '001',
      title: 'テスト',
    }
  },
  methods: {
    async addData() {
      try {
        const db = getFirestore(this.$firebase)
        const docRef = await addDoc(collection(db, 'tasks'), {
          id: this.id,
          title: this.title,
        })
        // eslint-disable-next-line no-console
        console.log('追加したデータのID:', docRef.id)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error:', error)
      }
    },
  },
}
</script>

<style></style>
