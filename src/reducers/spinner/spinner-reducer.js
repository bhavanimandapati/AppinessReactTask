export default function reducerRole(state = {isLoading: false}, action) {
                          switch (action.type) {
                            case "LOAD_SPINNER": {
                                return {
                                    ...state,
                                  isLoading:true,
                                }
                                break;
                            }
                            case "REMOVE_SPINNER": {
                                return {
                                      ...state,
                                      isLoading:false
                                      }
                                break;
                            }
                            
                          }
                          
                          return state;
                      }
