# Remove node_modules do Git e corrige o historico para permitir push no GitHub
# Execute na pasta do projeto: .\fix-push-github.ps1

Write-Host "1. Removendo node_modules do indice do Git..." -ForegroundColor Cyan
git rm -r --cached node_modules 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "   (node_modules pode nao estar no ultimo commit - continuando)" -ForegroundColor Yellow
}

Write-Host "2. Removendo node_modules de todo o historico (isso pode demorar)..." -ForegroundColor Cyan
$env:FILTER_BRANCH_SQUELCH_WARNING = "1"
git filter-branch --force --index-filter "git rm -r -f --cached --ignore-unmatch node_modules" --prune-empty HEAD

if ($LASTEXITCODE -ne 0) {
    Write-Host "   Erro no filter-branch. Tentando alternativa: novo commit sem node_modules..." -ForegroundColor Yellow
    git rm -r -f --cached node_modules 2>$null
    git add .
    git commit -m "Remove node_modules from repository" 2>$null
}

Write-Host "3. Pronto. Agora rode: git push origin main" -ForegroundColor Green
