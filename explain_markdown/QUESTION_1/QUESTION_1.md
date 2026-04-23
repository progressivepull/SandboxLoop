# Assigning Column Names in PySpark DataFrames

At a glance, that line is doing **two related but distinct things**: creating a DataFrame and assigning column names.

## 1. spark.createDataFrame(data)

This part:

- Converts your raw **data** (often a list of tuples, lists, or Rows) into a PySpark DataFrame.

- If you don't explicitly provide a schema, Spark will infer it.

- The resulting DataFrame will usually have default column names like **_1**, **_2**, etc.

## 2. .toDF(*columns)


This part:


- Renames the columns of the DataFrame.

- *columns unpacks a list of column names (e.g., ["name", "age"]) and assigns them in order.

**So combined:**

``` python
spark.createDataFrame(data).toDF(*columns)
```

means:

"Create a DataFrame from **data**, then immediately rename its columns using the names in **columns**."


**Example**


``` python

data = [("Alice", 25), ("Bob", 30)]  

columns = ["name", "age"]  

df = spark.createDataFrame(data).toDF(*columns)

```


Without .toDF(*columns), you might get:


```
_1 _2  
Alice 25  
Bob 30
```


With it:

```
name age  
Alice 25  
Bob 30
```

**Why use this pattern?**



- Quick way to assign column names without defining a full schema.

- Keeps code concise when working with simple structured data.

**Alternative (more explicit)**

You could instead do:

```
spark.createDataFrame(data, schema=columns)

```

But .toDF(*columns) is often used when:

- You already created the DataFrame, or

- You want a quick rename step.

