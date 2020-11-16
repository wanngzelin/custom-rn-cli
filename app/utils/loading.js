
let loading;

export function setLoading(navigatorRef) {
  loading = navigatorRef;
}

export function show() {
  loading.show()
}
export function hide() {
  loading.hide()
}
