1. Generate Migration
👉 Purpose: Entity files (jaise todo.entity.ts) aur database ke schema me jo difference hai uske basis par automatic migration file banata hai.
npm run migration:generate  : "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate src/migrations/NewMigration -d src/config/db.ts"


2. Create Migration
👉 Purpose: Sirf ek empty migration file banata hai jisme tum manually SQL likh sakte ho.
"migration:create": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create src/migrations/NewMigration"


3. Run Migration
👉 Purpose: Pending migrations ko database me apply (execute) karta hai.
"migration:run": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d src/config/db.ts"


4. Revert Migration
👉 Purpose: Last run ki gayi migration ko undo (rollback) karta hai.
"migration:revert": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:revert -d src/config/db.ts"


5. Show Migrations
👉 Purpose: Ye dikhta hai ke kitni migrations database me applied hain aur kitni pending hain.
"migration:show": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:show -d src/config/db.ts"
