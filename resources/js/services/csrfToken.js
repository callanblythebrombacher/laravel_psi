import {getCookie} from "./cookies";

export const csrfToken = document.getElementsByName('csrf-token')[0].content;;
export  const xsrfToken = getCookie('X-SRF-TOKEN')
