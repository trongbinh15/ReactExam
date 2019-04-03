import { BEGIN_API_CALL, COMPLETE_API_CALL } from "./actionType";

export function beginApi() {
  return { type: BEGIN_API_CALL };
}

export function completeApi() {
  return { type: COMPLETE_API_CALL };
}
