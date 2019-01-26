var sortNumDaysPastDueAscendingFlag = true;
var sortPastDueAmountAscendingFlag = true;
var sortMonthlyChargeAscendingFlag = true;
var sortCumstomerNameAscendingFlag = true;

function CreateCustomerDataTableHeader()
{
	return "<tr><th onclick='SortCustomerName();'>Customer Name</th><th onclick='SortMonthlyCharge();'>Monthly Charge</th><th onclick='SortPastDueAmount();'>Past Due Amount</th><th onclick='SortNumDaysPastDue();'>Num Days Past Due</th></tr>";	
}

function CreateCustomerDataTable()
{
	var i = 0;
	var numRecords = customerName.length;
	var tempOutput = CreateCustomerDataTableHeader();
	for (i = 0; i < numRecords; i ++)
	{
		tempOutput += "<tr>";
		tempOutput += "<td>" + customerName[i] + "</td>";
		tempOutput += "<td>" + monthlyCharge[i] + "</td>";
		tempOutput += "<td>" + pastDueAmount[i] + "</td>";
		tempOutput += "<td>" + numDaysPastDue[i] + "</td>";
		tempOutput += "</tr>";
	}
	document.getElementById("CustomerDataTable").innerHTML = tempOutput;
}

function SortCustomerName()
{
	if (sortCumstomerNameAscendingFlag == true)
	{
		SortCustomerNameAscending();
	}
	else
	{
		SortCustomerNameDescending();
	}
	sortCumstomerNameAscendingFlag = !sortCumstomerNameAscendingFlag;
}
function SortCustomerNameAscending()
{
	var i = 0;
	var j = 0;
	
	for (i = 0; i < customerName.length; i++)
	{
		for (j = 0; j < customerName.length; j++)
		{
			if (customerName[i].charCodeAt(0) < customerName[j].charCodeAt(0)) //转为ASCⅡ码用来比较
			SwapRows(i, j);
		}
	}
	CreateCustomerDataTable();
}
function SortCustomerNameDescending()
{
	var i = 0;
	var j = 0;
	for (i = 0; i < customerName.length; i++)
	{
		for (j = 0; j < customerName.length; j++)
		{
			if (customerName[i].charCodeAt(0) > customerName[j].charCodeAt(0))
			SwapRows(i, j);
		}
	}
	CreateCustomerDataTable();
}

function SortMonthlyCharge()
{
	if (sortMonthlyChargeAscendingFlag == true)
	{
		SortMonthlyChargeAscending();
	}
	else
	{
		SortMonthlyChargeDescending();
	}
	sortMonthlyChargeAscendingFlag = !sortMonthlyChargeAscendingFlag;
}
function SortPastDueAmount()
{
	(sortPastDueAmountAscendingFlag == true) ? SortPastDueAmountAscending() : SortPastDueAmountDescending();
	sortPastDueAmountAscendingFlag = !sortPastDueAmountAscendingFlag;
}
function SortNumDaysPastDue()
{	
	(sortNumDaysPastDueAscendingFlag == true) ? SortNumDaysPastDueAscending() : SortNumDaysPastDueDescending();	
	sortNumDaysPastDueAscendingFlag = !sortNumDaysPastDueAscendingFlag;
}

function SwapRows(row1, row2) //4部分缺一不可，用于绑定4个array,保证以行为单位进行排序
{	
	if (row1 == row2)
	{		
		return;		
	}	
	var tempVar = monthlyCharge[row1];
	monthlyCharge[row1] = monthlyCharge[row2];
	monthlyCharge[row2] = tempVar;

	tempVar = customerName[row1];
	customerName[row1] = customerName[row2];
	customerName[row2] = tempVar;

	tempVar = pastDueAmount[row1];
	pastDueAmount[row1] = pastDueAmount[row2];
	pastDueAmount[row2] = tempVar;

	tempVar = numDaysPastDue[row1];
	numDaysPastDue[row1] = numDaysPastDue[row2];
	numDaysPastDue[row2] = tempVar;	
}

function SortMonthlyChargeAscending()
{
	var i = 0;
	var j = 0;
	for (i = 0; i < customerName.length; i++)
	{
		for (j = 0; j < customerName.length; j++)
		{
			if (monthlyCharge[i] < monthlyCharge[j])
			{
				SwapRows(i, j);
			}
		}
	}
	CreateCustomerDataTable();
}

function SortMonthlyChargeDescending()
{
	var i = 0;
	var j = 0;
	for (i = 0; i < customerName.length; i++)
	{
		for (j = 0; j < customerName.length; j++)
		{
			if (monthlyCharge[i] > monthlyCharge[j])
			{
				SwapRows(i, j);
			}
		}
	}
	CreateCustomerDataTable();
}

function SortPastDueAmountAscending()
{
	var i = 0;
	var j = 0;
	for (i = 0; i < customerName.length; i ++)
	{
		for (j = 0; j < customerName.length; j ++)
		{
			if (pastDueAmount[i] < pastDueAmount[j])
			{
				SwapRows(i, j);
			}
		}
	}
	CreateCustomerDataTable();
}

function SortPastDueAmountDescending()
{
	var i = 0;
	var j = 0;
	for (i = 0; i < customerName.length; i ++)
	{
		for (j = 0; j < customerName.length; j ++)
		{
			if (pastDueAmount[i] > pastDueAmount[j])
			{
				SwapRows(i, j);
			}
		}
	}
	CreateCustomerDataTable();
}

function SortNumDaysPastDueAscending()
{	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;

	for (i = 0; i < numRecords; i ++)
	{		
		for (j = 0; j < numRecords; j ++)
		{			
			if (numDaysPastDue[i] < numDaysPastDue[j])
			{
				SwapRows(i, j);
			}			
		}		
	}	
	CreateCustomerDataTable();	
}

function SortNumDaysPastDueDescending()
{	
	var i = 0;
	var j = 0;
	var numRecords = customerName.length;
	for (i = 0; i < numRecords; i ++)
	{		
		for (j = 0; j < numRecords; j ++)
		{			
			if (numDaysPastDue[i] > numDaysPastDue[j])
			{
				SwapRows(i, j);
			}		
		}		
	}
	CreateCustomerDataTable();	
}


