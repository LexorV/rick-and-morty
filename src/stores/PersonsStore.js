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
    onePerson: {},
    location: '',
    searchName: '',
    searchStatus: 'alive',
    isAll: true,
  }),
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

    async getOnePerson(id) {
      const systemStore = useSystemStore()
      systemStore.isLoading = true
      try {
        const res = await axios.get(`${API}character/${id}`);
        this.onePerson = res.data;
        this.location = Object.assign(res.data.location.name);

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
        if (this.isAll || name !== this.searchName || status !== this.searchStatus ) {
          this.persons = res.data.results
        } else { this.persons = this.persons.concat(res.data.results) }
        this.maxPersonsSearchPages = res.data.info.pages
        this.searchName = name;
        this.searchStatus = status;
        this.isAll = false;
      } catch (err) {
        this.persons = [];
        console.log(err)
      } finally {
        systemStore.isLoading = false
      }
    },
    setAll() {
      this.isAll = !this.isAll
    }

  },

});