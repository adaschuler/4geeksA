/* const id = contact_id */
const url = "https://assets.breatheco.de/apis/fake/contact/";
/* const urlGet = urlPost + "agenda/ada" */
/* const urlPut = urlPost + id
const urlDelete = urlPost + id */

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agendaAda: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			readContact: () => {
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(url + agenda / ada, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ agendaAda: data.results })); //Obtienes los datos
			},
			oneContact: idcontact => {
				let contactlist = agendaAda.filter(item => item.id === idcontact);

				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(url + id, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ agendaAda: data.results })); //Obtienes los datos
			},
			createContact: () => {
				const OBJCONFIG = {
					method: "POST",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(url, OBJCONFIG)
					.then(res => res.json())
					.then(data => setStore({ agendaAda: data.results }));
			},
			updateContact: contact_id => {
				const OBJCONFIG = {
					method: "PUT",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(urlPut + contact_id, OBJCONFIG)
					.then(res => res.json())
					.then(data => setStore({ agendaAda: data.results }));
			},
			deleteContact: contact_id => {
				const OBJCONFIG = {
					method: "DELETE",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(urlDelete + contact_id, OBJCONFIG)
					.then(res => res.json())
					.then(data => setStore({ agendaAda: data.results }));
			}

			/* setdeleteContact: person => {
				setStore({ agendaAda: getStore().agendaAda.filter(index => index !== person) });
			}, */
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
