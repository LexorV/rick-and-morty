import { defineStore } from "pinia";
import axios from 'axios';
import {API} from "@/services/constants"
import { useSystemStore } from "./SystemStore";

export const usePersonsStore = defineStore("PersonsStore", {
  state: () => ({
    persons: [],
    onePerson: {},
    location: '',
  }),
  getters: {
  },
  actions: {
    async getPersons() {
      const systemStore = useSystemStore()
      systemStore.isLoading = true
     try {
        const res = await axios.get(`${API}character`);
        this.persons = res.data.results;
      }
      catch (err) {
        console.log(err)
      }
      finally {
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

        }
        catch (err) {
          console.log(err)
        }
        finally {
          systemStore.isLoading = false
        }
        },
  },
});