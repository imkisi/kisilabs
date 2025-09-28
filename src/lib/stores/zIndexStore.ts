import { writable } from 'svelte/store';

const baseZIndex = 10;

export const zIndexCounter = writable(baseZIndex);

export {};