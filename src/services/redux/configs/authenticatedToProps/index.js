export default function mapStateToProps (state) {
  return {
    authenticated: state.authenticated,
  };
}