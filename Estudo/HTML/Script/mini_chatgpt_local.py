import difflib

# Base de conhecimento local
conhecimento = {
    "oi": "Olá! Eu sou o Mini Chat local.",
    "como vai": "Estou funcionando bem! E você?",
    "python": "Python é ótima para automação e IA simples.",
    "ajuda": "Você pode me perguntar sobre programação ou automação."
}

def responder(pergunta):
    pergunta = pergunta.lower()

    # Verifica correspondência aproximada
    melhor_match = difflib.get_close_matches(pergunta, conhecimento.keys(), n=1, cutoff=0.6)

    if melhor_match:
        return conhecimento[melhor_match[0]]

    return "Ainda estou aprendendo sobre isso."

print("Mini ChatGPT local iniciado! (digite 'sair' para parar)\n")

while True:
    user = input("Você: ")

    if user.lower() == "sair":
        break

    print("IA:", responder(user))