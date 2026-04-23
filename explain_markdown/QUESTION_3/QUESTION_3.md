# Adding a Constant Column in PySpark DataFrames

To add a new column with a constant value in PySpark, you use the **withColumn** function along with **lit** (which stands for “literal”).

## Correct approach:

``` python
from pyspark.sql.functions import lit

df = df.withColumn("Country", lit("USA"))
```

## Explanation:

* **withColumn("Country", ...)** → creates (or replaces) a column named **Country**.

* **lit("USA")** → assigns the constant value **"USA"** to every row in that column.

## Why this works:

PySpark column operations expect **Column objects**, not raw Python values.       

**lit()** converts a plain value into a Spark column expression, which is why it’s required here.

## Result:

Every row in df will now have a new column:

```
Country = "USA"
```
