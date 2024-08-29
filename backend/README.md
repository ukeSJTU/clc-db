# mysql 操作

```bash
brew install mysql
brew update
brew serices start mysql
==> Successfully started `mysql` (label: homebrew.mxcl.mysql)
mysql
```

## To load data

```bash
mkdir -p /ChemNexus/data/output_pngs
python manage.py sdf2png ./data/all_sdfs ./data/output_pngs --size 300 300
python manage.py makemigrations
python manage.py migrate
python manage.py load_molecules -p /ChemNexus/data/merged.csv
```

https://stackoverflow.com/questions/52547833/getting-importerror-libxrender-so-1-cannot-open-shared-object-file-when-impo
