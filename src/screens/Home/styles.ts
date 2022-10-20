import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    width: "100%",
    height: 173,
    backgroundColor: "#000000",
  },
  logo: {
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo: {
    color: "#FFFFFF",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 38,
    padding: 16,
  },

  input: {
    flex: 1,
    backgroundColor: "#323238",
    color: "#FFF",
    borderRadius: 5,
    fontSize: 16,
    padding: 16,
    marginRight: 3,
  },

  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#4EA8DE",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  headerBody: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 1,
    padding: 24,
  },

  headerBodyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4EA8DE",
    marginRight: 8,
  },

  headerBodyText2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5E60CE",
    marginRight: 8,
  },

  hr: {
    borderBottomColor: "#808080",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginRight: 24,
    marginLeft: 24,
  },

  listEmptyText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    padding: 16,
  },

  badget: {
    width: 25,
    height: 20,
    backgroundColor: "#323238",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  badgetText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  badgetContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "space-around",
  },

  lists: { 
    margin: 16 
  },
});
