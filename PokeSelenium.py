from selenium import webdriver
from selenium.webdriver.common.by import By

# Inizializzazione del driver di Selenium
driver = webdriver.Chrome()  # Assicurati di avere il driver Chrome installato e nel tuo PATH

# Apertura del sito web
url = "https://wiki.pokemoncentral.it/Elenco_Pok%C3%A9mon_secondo_il_Pok%C3%A9dex_Nazionale"
driver.get(url)

# Estrazione delle informazioni
pokemons = []

# Trova tutti gli elementi della tabella dei Pokémon
pokemon_rows = driver.find_elements(By.XPATH, "//table[@class='wikitable']/tbody/tr")

# Ignora l'intestazione della tabella
for row in pokemon_rows[1:]:
    # Estrai le informazioni dalla riga
    columns = row.find_elements(By.TAG_NAME, "td")
    
    # Estrai le informazioni specifiche
    numero = columns[0].text
    nome = columns[1].text
    immagine = columns[2].find_element(By.TAG_NAME, "img").get_attribute("src")
    tipo = columns[3].text
    
    # Aggiungi le informazioni a una lista di dizionari
    pokemon_info = {
        "Numero": numero,
        "Nome": nome,
        "Immagine": immagine,
        "Tipo": tipo
    }
    pokemons.append(pokemon_info)

# Stampa le informazioni dei Pokémon
for pokemon in pokemons:
    print(pokemon)

# Chiudi il browser
driver.quit()
