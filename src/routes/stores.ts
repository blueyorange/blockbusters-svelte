import { writable } from 'svelte/store';

export const selectedLetter = writable(null as null | string);
