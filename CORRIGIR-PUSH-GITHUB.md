# Corrigir push para o GitHub (arquivo > 100 MB)

O erro acontece porque **node_modules** foi commitado por engano. O `.gitignore` já ignora `node_modules`, mas ele ainda está no histórico. Escolha **uma** das opções abaixo.

---

## Opção A – Reescrever o histórico (mantém seus commits)

Abra o **PowerShell** na pasta do projeto (`D:\CÓDIGOS\HAAST\autoeletrica`) e rode:

```powershell
# 1. Remover node_modules do rastreamento
git rm -r --cached node_modules

# 2. Remover node_modules de TODOS os commits (pode demorar)
$env:FILTER_BRANCH_SQUELCH_WARNING = "1"
git filter-branch --force --index-filter "git rm -r -f --cached --ignore-unmatch node_modules" --prune-empty HEAD

# 3. Fazer push
git push origin main
```

Se o passo 2 der erro ou travar, use a **Opção B**.

---

## Opção B – Repositório novo (um único commit, mais simples)

Você perde o histórico de commits e fica só com um commit limpo. Na pasta do projeto:

```powershell
# 1. Apagar a pasta .git (copia o projeto inteiro antes se quiser backup)
Remove-Item -Recurse -Force .git

# 2. Iniciar de novo
git init
git add .
git commit -m "Initial commit - Auto Elétrica Pedrão"

# 3. Conectar ao GitHub e fazer push
git branch -M main
git remote add origin https://github.com/haast7/autoeletricapedrao.git
git push -u origin main
```

Como `node_modules` está no `.gitignore`, ele **não** será incluído no commit.

---

## Depois do push

- No [Vercel](https://vercel.com): importe o repositório **haast7/autoeletricapedrao**. O Vercel instala as dependências com `npm install` no deploy; não é preciso enviar `node_modules`.
