export default function ({ $auth, redirect }) {
  const { name } = $auth.user.data
  if (name !== 'Super Admin') {
    return redirect('/')
  }
}
