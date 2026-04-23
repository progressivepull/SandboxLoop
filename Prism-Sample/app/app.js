$(document).ready(function () {
  console.log("App Started.....");

		const quiz = {
		  questions: [
			{
			  id: 1,
			  resource: {
				code: {
				  lines: [
					{ line: "# Create a spark session" },
					{ line: "from pyspark.sql import SparkSession" },
					{ line: "from pyspark.sql.functions import lit" },
					{ line: "" },
					{ line: "" },
					{ line: "spark = SparkSession" },
					{ line: "           .builder" },
					{ line: "           .appName('SparkExamples')" },
					{ line: "           .getOrCreate()" },
					{ line: "" },
					{ line: "# Create a spark dataframe" },
					{ line: "columns = [\"Name\", \"Course_Name\"," },
					{ line: "           \"Months\"," },
					{ line: "           \"Course_Fees\", \"Discount\"," },
					{ line: "           \"Start_Date\", \"Payment_Done\"]" },
					{ line: "data = [" },
					{ line: "    (\"Amit Pathak\", \"Python\", 3," },
					{ line: "     10000, 1000, \"02-07-2021\", True)," },
					{ line: "    (\"Shikhar Mishra\", \"Soft skills\"," },
					{ line: "     2, 8000, 800, \"07-10-2021\", False)," },
					{ line: "    (\"Shivani Suvarna\", \"Accounting\", 6," },
					{ line: "     15000, 1500, \"20-08-2021\", True)," },
					{ line: "    (\"Pooja Jain\", \"Data Science\", 12," },
					{ line: "     60000, 900, \"02-12-2021\", False)," },
					{ line: "]" },
					{ line: "df = spark.createDataFrame(data).toDF(*columns)" },
					{ line: "" },
					{ line: "# View the dataframe" },
					{ line: "df.show()" }
				  ],
				  language: "python"
				}
			  }
			}
		  ]
		};
		
		
		function renderPrismCode(codeObj) {
			
		  codeObj.lines.unshift({ line: "" });
		  
		  const code = codeObj.lines.map(l => l.line).join("\n");

		  return `<pre class="line-numbers">
						<code class="language-${codeObj.language}">
							${code}
						</code>
					</pre>`;
		}
		
		const question = quiz.questions[0];
		const codeHTML = renderPrismCode(question.resource.code);

		$("#prismDiv").html(codeHTML);

		Prism.highlightAll();



  
 
});