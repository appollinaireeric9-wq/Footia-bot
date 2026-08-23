const exprimer = exiger('exprimer');
const axios = exiger('axios');
const application = exprimer();
application.utiliser(exprimer.json())

// 1. PAGE D'ACCUEIL POUR RENDER
application.obtenir('/', (demande, res) => {
  res.envoyer('Footia Bot is Running ✅');
  });

  const JETON_WHATSAPP = processus.environ.VARIABLE_JETON_WHATSAPP;
  const NUMÉRO_DE_TÉLÉPHONE_ID = processus.environ.VARIABLE_NUMERO_ID;
  const CLÉ_API_FOOTBALL = processus.environ.VARIABLE_CLE_FOOTBALL;
  const META_AI_KEY = processus.environ.VARIABLE_META_AI;

  // 2. VÉRIFICATION DU WEBHOOK POUR META
  application.obtenir('/webhook', (demande, res) => {
    const VÉRIFIER_LE_JETON = "footia2026";
      const mode = demande.requête['hub.mode'];
        const jeton = demande.requête['hub.verify_token'];
          const défi = demande.requête['hub.challenge'];
            
              si (mode && jeton === VÉRIFIER_LE_JETON) {
                  retour res.envoyer(défi);
                    } sinon {
                        res.envoyerStatut(403);
                          }
                          });

                          // 3. RÉCEPTION DES MESSAGES WHATSAPP
                          application.poste('/webhook', asynchrone (demande, res) => {
                            const corps = demande.corps;
                              
                                si (corps.objet === 'whatsapp_business_account') {
                                    corps.entrée.forEach(entrée => {
                                          const changements = entrée.changements;
                                                changements.forEach(changement => {
                                                        const message = changement.valeur.messages;
                                                                si (message) {
                                                                          const depuis = message[0].depuis;
                                                                                    const texte = message[0].texte.corps;
                                                                                              console.log(`Message de ${depuis}: ${texte}`);
                                                                                                        
                                                                                                                  // Ici tu ajouteras la réponse du bot plus tard
                                                                                                                          }
                                                                                                                                });
                                                                                                                                    });
                                                                                                                                        res.envoyerStatut(200);
                                                                                                                                          } sinon {
                                                                                                                                              res.envoyerStatut(404);
                                                                                                                                                }
                                                                                                                                                });

                                                                                                                                                const PORT = processus.environ.PORT || 3000;
                                                                                                                                                application.écouter(PORT, () => {
                                                                                                                                                  console.log(`Serveur en marche sur le port ${PORT}`);
                                                                                                                                                  });