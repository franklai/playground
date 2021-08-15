<template>
  <div>
    <div>RSS</div>
    <w-list :items="rssList" hover>
      <template #item="{ item }">
        <w-flex align-center justify-space-between>
          <span @click="showRssItem(item.id)">{{ item.title }}</span>
          <a :href="item.url" target="_blank">
            <w-icon md>mdi mdi-rss</w-icon>
          </a>
        </w-flex>
      </template>
    </w-list>
    <w-list :items="rssItems" hover checklist>
      <template #item="{ item }">
        <w-flex align-center justify-space-between>
          <span>{{ item.title }}</span>
          <span @click="addTask(item.url)">
            <w-icon xl>mdi mdi-plus</w-icon>
          </span>
          <a :href="item.link" target="_blank">
            <w-icon md>mdi mdi-link</w-icon>
          </a>
        </w-flex>
      </template>
    </w-list>

    <w-dialog v-model="dialog.show" title-class="primary-light1--bg white">
      <template #title>Add tasks</template>

      <div>Add the following urls</div>
      <w-list :items="dialog.urls"></w-list>

      <template #actions>
        <div class="spacer" />
        <w-button @click="dialog.show = false" bg-color="success">OK</w-button>
        <w-button @click="dialog.show = false">Cancel</w-button>
      </template>
    </w-dialog>
  </div>
</template>

<script>
import { sendRequest } from "../helpers/api";

import "@mdi/font/css/materialdesignicons.min.css";

const doRssList = async () => {
  return await sendRequest("SYNO.DownloadStation2.RSS.Feed", "list", 1, {
    limit: 100
  }).then(resp => resp.json());
};

const requestRssItem = async id => {
  return await sendRequest("SYNO.DownloadStation2.RSS.Item", "list", 1, {
    action: JSON.stringify("rss_item_list"),
    feed_id: id,
    limit: 100
  }).then(resp => resp.json());
};

export default {
  data() {
    return {
      dialog: {
        show: false,
        urls: []
      },
      rssList: [],
      rssItems: []
    };
  },
  async mounted() {
    const resp = await doRssList();
    this.rssList = resp.data.items;
  },
  methods: {
    async showRssItem(id) {
      const resp = await requestRssItem(id);
      console.log(resp);
      this.rssItems = resp.data.items;
    },
    addTask(url) {
      // this.$waveui.notify(`Under Construction: add url ${url}`);
      this.dialog.show = true;
      this.dialog.urls = [
        {
          label: url
        }
      ];
    }
  }
};
</script>

<style>
</style>