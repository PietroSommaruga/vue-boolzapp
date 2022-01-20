new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        writedMessage: "",
        myMessage: [],
        search: "",
        contacts: [
            {
                name: 'Mario',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao bello',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Come sta andando la vita?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Non troppo bene, ho preso il covid',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Per fortuna sto bene e ho finito la quarantena',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Sono rimasto a casa due settimanen non ce la facevo più',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Che sfiga!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Se vuoi uno di questi giorni andiamo a bere una birra',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Certo, volentieri',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            // ---------------------------------
            {
                name: 'Mattia',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Conosci Gianmarco Tocco?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei non conoscerlo',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Marta',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai visto il nuovo film?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, se vuoi andiamo insieme a vederlo',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Sei bravo a giocare a pallone?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Me la cavo gioco da quando sono piccolo',
                        status: 'received'
                    }
                ],
            },            
        ],
        
        
    },
    methods: {
        indexClick: function (index) {
          this.currentIndex = index;
        },

        addUserMessage: function (index) {   //TODO mettere i messaggi in ordine verticale
            this.contacts[index].messages.push({
            text: this.writedMessage,
            date: "now",
            status: "sent",
          });
          this.writedMessage = "";
          setTimeout (() => {
              this.autoReply(index)
          }, 1000)
        },

        autoReply(index) {
            this.contacts[index].messages.push({
                date: "now",
                text: "Ok",
                status:"received",
            })
        },

        findAChat: function (contact) {
            if (contact.name.toLowerCase().startsWith(this.search)) {
              return true;
            }
            return false;
          },

    }
});