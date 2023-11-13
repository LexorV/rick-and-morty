import {
  defineStore
} from "pinia";
import axios from 'axios';
import {
  API
} from "@/services/constants"
import {
  useSystemStore
} from "./SystemStore";

export const usePersonsStore = defineStore("PersonsStore", {
  state: () => ({
    persons: [],
    maxPersonsAllpages: 1,
    maxPersonsSearchPages: 1,
    pageNow: 1,
    searchName: '',
    searchStatus: 'alive',
    newSearch: true,
    errorSerch: ''
  }),
  persist: true,
  getters: {},
  actions: {
    async getPersons(page = 1) {
      const systemStore = useSystemStore()
      systemStore.isLoading = true
      try {
        const res = await axios.get(`${API}character/?page=${page}`);
        this.persons = this.persons.concat(res.data.results);
        this.maxPersonsAllpages = res.data.info.pages
      } catch (err) {
        console.log(err)
      } finally {
        systemStore.isLoading = false
      }
    },

    async searchPerson(page = 1, name = this.searchName, status = this.searchStatus) {
      const systemStore = useSystemStore()
      systemStore.isLoading = true
      try {
        const res = await axios.get(`${API}character/?page=${page}&name=${name}&status=${status}`);
        if (name !== this.searchName || status !== this.searchStatus || this.newSearch ) {
          this.persons = res.data.results
          this.pageNow = 1
        } else {
          this.persons = this.persons.concat(res.data.results)
        }
        this.maxPersonsSearchPages = res.data.info.pages
        this.searchName = name;
        this.searchStatus = status;
        this.errorSerch = '';
      } catch (err) {
        this.persons = [];
        err.response ? this.errorSerch = err.response.data.error:console.log(err)
      } finally {
        systemStore.isLoading = false
      }
    },
    setPageNow(page) {
      this.pageNow = page
    },

    clearStoreFields() {
      this.searchName = '';
      this.searchStatus = 'alive';
      this.newSearch = true;
    },
    newSearchOff() {
      this.newSearch = false;
    }

  },

});