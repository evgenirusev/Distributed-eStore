using System;

namespace DistributedEStore.Common.Types
{
    public class DistributedEStoreException : Exception
    {
        public string Code { get; }

        public DistributedEStoreException()
        {
        }

        public DistributedEStoreException(string code)
        {
            Code = code;
        }

        public DistributedEStoreException(string message, params object[] args) 
            : this(string.Empty, message, args)
        {
        }

        public DistributedEStoreException(string code, string message, params object[] args) 
            : this(null, code, message, args)
        {
        }

        public DistributedEStoreException(Exception innerException, string message, params object[] args)
            : this(innerException, string.Empty, message, args)
        {
        }

        public DistributedEStoreException(Exception innerException, string code, string message, params object[] args)
            : base(string.Format(message, args), innerException)
        {
            Code = code;
        }        
    }
}